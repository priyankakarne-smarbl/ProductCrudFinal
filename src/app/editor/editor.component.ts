import { Component ,Output,EventEmitter, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
   @Output() saveBtnEvent=new EventEmitter<any>();   
  
  editor!: FormGroup;
  textdata:string="";
  constructor(){}
  ngOnInit(): void {
    this.editor=new FormGroup({
      textareas:new FormControl()
    })
    this.saveBtnEvent.emit(this.editor.get("textareas"))

  }

  cleartextArea(){
    this.editor.get("textareas")?.setValue("");
    }


}
