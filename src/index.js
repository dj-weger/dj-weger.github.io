import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = lazy(() => import('./App'));

ReactDOM.render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>,
    document.getElementById('root')
);

$(document).ready(function () {
    // ... your existing code ...

    $("#nav-toggle").click(function () {
        $(".nav-links").toggleClass("show"); // Use class selector here
    });

    // Optional: Hide the menu when a link is clicked (useful for single-page sites)
    $(".nav-links a").click(function () {
        $(".nav-links").removeClass("show");
    });
});