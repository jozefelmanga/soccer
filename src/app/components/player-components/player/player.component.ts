import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  @Input() player: any;

  features: string[] = ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'];
  playerFeatures: { [key: string]: number } = {};
  playerPower = 0;

  ngOnInit(): void {
    for (const feature of this.features) {
      const value = this.getRandomInRange(75, 95);
      this.playerFeatures[feature] = value;
      this.playerPower += value;
    }
    this.playerPower = Math.round(this.playerPower / this.features.length);
  }

  getRandomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
