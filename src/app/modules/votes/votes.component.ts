import { Component, OnInit } from '@angular/core';
import {VotesService} from '../../services/votes/votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor(public votesService: VotesService) { }

  ngOnInit(): void {
 }

  public vote() {
  }

}
