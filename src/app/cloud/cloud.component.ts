import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {

  options: CloudOptions = {
    width: 1000,
    height: 400,
    overflow: true,
  };

  data: CloudData[] = [];
  value: string;

  constructor(private srv: DataService) { }

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this.srv.getWords().subscribe(data => {
      const wordData: CloudData[] = data["word-cloud"];
      this.data = wordData;
      console.log(this.data);
    }
  );
  }

  onEnter(idtopic , value: string) {
    this.value = value; console.log(this.value);
    this.srv.update_topic_name(idtopic, value).subscribe();
  }

}
