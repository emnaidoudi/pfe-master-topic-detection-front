import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWords() {
    return this.http.get('http://127.0.0.1:5000/word-clouds/');
  }

  update_topic_name(topicid, topicname) {
    return this.http.get('http://127.0.0.1:5000/update_topic_name/' + topicid + '/' + topicname);



  }
}
