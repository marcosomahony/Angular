import { AppPage } from './app.po';

describe('basic-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Saludos desde Blablebl!');
  });
});

// La idea es tener un describe por cada pantalla: about, home...
