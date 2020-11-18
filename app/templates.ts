// export const main = `<div class="container mt-4 text-center">
//                                 <h1 class="mb-0">WebPack Bundler with TypeScript</h1>
//                                 <p>${new Date()}</p>
//                                 <div class="custom-alerts"></div>
//                                 <div class="custom-jumbo"></div>
//                            </div>`;

// export const alert = `<div class="alert alert-dismissible alert-success fade in show" role="alert">
//                            <button class="close" data-dismiss="alert" aria-label="Close">
//                                <span aria-hidden="true">&times;</span>
//                            </button>
//                            <strong>Success!</strong> Dissmissible alert TS injected to Webpack!
//                        </div>`;

// export const welcome = `<div class="jumbotron">
//                             <h1 class="text-info">Welcome</h1>
//                             <p>Added Bootstrap to Webpack Bundle.</p>
//                         </div>`;

// Using Handlebars
import * as Handlebars from '../node_modules/handlebars/dist/handlebars.js';

export const main = Handlebars.compile(`<div class="container mt-4 text-center">
                                <h1 class="mb-0">WebPack Bundler with TypeScript & Handlebars</h1>
                                <p>${new Date()}</p>
                                <div class="custom-alerts"></div>
                                <div class="custom-jumbo"></div>
                           </div>`);

export const alert = Handlebars.compile(`<div class="alert alert-dismissible alert-{{type}} fade in show" role="alert">
                           <button class="close" data-dismiss="alert" aria-label="Close">
                               <span aria-hidden="true">&times;</span>
                           </button>
                           {{message}}
                       </div>`);

export const welcome = Handlebars.compile(`<div class="jumbotron">
                            <h1 class="text-info">Welcome</h1>
                            <p>Added Bootstrap to Webpack Bundle.</p>
                        </div>`);