import { Component } from '@angular/core';
import { OnClickLogger } from '../../common/behaviours/on-click-logger';
import { Compose } from '../../common/decorators/compose';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
@Compose(OnClickLogger)
export class HomePageComponent implements OnClickLogger  {
  logHi: () => void;
  title = 'tryNgrxStore';
}
