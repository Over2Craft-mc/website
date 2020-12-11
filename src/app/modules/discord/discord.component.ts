import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.css']
})
export class DiscordComponent implements OnInit {

  constructor() { }

  public openDiscord(): void {
    document.getElementById('discord').classList.remove('discord-reduced');
    document.getElementById('discord').classList.add('discord-not-reduced');
    document.getElementById('discord-reduce-bar-less').classList.remove('display-none');
    document.getElementById('discord-iframe').classList.remove('discord-iframe-reduced');
    document.getElementById('discord-reduce-bar-plus').classList.add('display-none');
    localStorage.setItem('discordOpened', 'true');
  }

  public closeDiscord(): void {

    document.getElementById('discord').classList.add('discord-reduced');
    document.getElementById('discord').classList.remove('discord-not-reduced');
    document.getElementById('discord-reduce-bar-less').classList.add('display-none');
    document.getElementById('discord-iframe').classList.add('discord-iframe-reduced');
    document.getElementById('discord-reduce-bar-plus').classList.remove('display-none');
    localStorage.setItem('discordOpened', 'false');
  }

  ngOnInit(): void {
    if (localStorage.getItem('discordOpened') === 'false') {
      this.closeDiscord();
    } else {
      this.openDiscord();
    }
  }

}
