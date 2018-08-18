import { Component } from '@angular/core';
import { OnClickLogger } from './common/behaviours/on-click-logger';
import { Compose } from './common/decorators/compose';
import { prices } from './common/iterable/prices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Compose(OnClickLogger)
export class AppComponent implements OnClickLogger {
  logHi: () => void;
  title = 'tryNgrxStore';
  iterablePrices = prices;
}
