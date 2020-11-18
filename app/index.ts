import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as templates from './templates.ts';

// Page Setup
document.body.innerHTML = templates.main();
const mainElement = document.body.querySelector('.custom-jumbo');
const alertsElement = document.body.querySelector('.custom-alerts');

/**
 * Use window location hash to show the specified view.
*/
const showView = async () => {
    const [ view, ...params ] = window.location.hash.split('/');

    switch (view) {
        case '#welcome':
            mainElement.innerHTML = templates.welcome();
            break;
        case '#404':
            alertsElement.innerHTML = templates.alert({
                type: 'danger',
                message: `Unrecognized View: ${view}`,
            });
            mainElement.innerHTML = templates.welcome();
            break;
    
        default:
            // Unrecognized view.
            throw Error(`Unrecognized View: ${view}`);
    }
}

window.addEventListener('hashchange', showView);
showView().catch(err => window.location.hash = '#404');
