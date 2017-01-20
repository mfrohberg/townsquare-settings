import ContactsModule from './contacts'
import ContactsController from './contacts.controller';
import ContactsComponent from './contacts.component';
import ContactsTemplate from './contacts.html';

describe('Contacts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ContactsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContactsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactsController);
      });
  });
});
