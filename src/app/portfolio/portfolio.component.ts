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
  { id: 3, title: 'Wellthy Therapeutics', link: 'https://www.wellthytherapeutics.com/' },

];
