'use strict';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document.body.innerHTML = `<div class="container mt-4 text-center">
                                <h1 class="mb-0">WebPack Bundler</h1>
                                <p>${new Date()}</p>
                                <div class="custom-alerts"></div>
                                <div class="custom-jumbo"></div>
                           </div>`;
                           
const customAlerts = document.body.querySelector('.custom-alerts');
customAlerts.innerHTML = `<div class="alert alert-dismissible alert-success fade in show" role="alert">
                                <button class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Success!</strong> Dissmissible alert JS injected to Webpack!
                            </div>`;

const customJumbotron = document.body.querySelector('.custom-jumbo');
customJumbotron.innerHTML = `<div class="jumbotron">
                                <h1 class="text-info">Welcome</h1>
                                <p>Added Bootstrap to Webpack Bundle.</p>
                            </div>`;