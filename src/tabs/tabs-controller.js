export default class TabsController {

  constructor (sessionName) {

    var sessions = {
      basicForm : {title: 'Basic Forms', steps: 12},
      basicForm1 : {title: 'Basic1 Forms1', steps: 7}
    };

    this.session = sessions[sessionName];

    this.steps = new Array(this.session.steps);

  }

}

export default TabsController;