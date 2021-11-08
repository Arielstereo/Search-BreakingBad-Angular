import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/service/character.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  characters: any =[];
  constructor(private service: CharacterService) { }
  
  async ngOnInit() {
    const allCharacters: any = await this.service.getAll();
    this.characters = allCharacters;
    console.log(this.characters);
  }
  
  character: string='';
  searchResult: any = [];

  submitBtn() {
    this.searchResult = this.characters.filter((item: any) => item.name.toLowerCase() === this.character.toLowerCase())
    this.character = '';
    console.log(this.searchResult)
  }


}
