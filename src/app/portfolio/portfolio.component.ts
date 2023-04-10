import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  public portfolioList: PortfolioList[] = PORTFOLIO_LIST;
}

export interface PortfolioList {
  id: number;
  title: string;
  link: string;
}

const PORTFOLIO_LIST: PortfolioList[] = [
  { id: 1, title: 'Velocity LLC', link: 'https://vintllc.com' },
  { id: 2, title: 'E.D. Marshall Jewelers', link: 'https://www.truventor.ai' },
  { id: 3, title: 'Truventor AI', link: 'https://www.truventor.ai' },
  { id: 4, title: 'Wellthy Therapeutics', link: 'https://www.wellthytherapeutics.com/' },
  { id: 7, title: 'Ozo', link: 'https://ozo.club/' },
  { id: 5, title: 'Spiceland Travel', link: 'http://spiceland.travel/' },
  { id: 6, title: 'La Salette India', link: 'http://lasaletteindia.com/' },
  { id: 7, title: 'La Salette India', link: 'https://www.muthoothealthcare.com/kozhenchery/' },

];
