<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SujetController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\EnsureUserIsLoggedIn;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Accueil');
})->name('accueil');

Route::controller(UserController::class)->group(function () {
    Route::post('/toggleLightMode', 'toggleLightMode')->name('toggleLightMode');
    Route::get('/signet', 'signet')->name('signet')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/sujets', 'sujets')->name('sujets')->middleware(EnsureUserIsLoggedIn::class);
});

Route::controller(SujetController::class)->group(function () {
    Route::post('/storeSujet', 'store')->name('storeSujet')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/sujet/{id}', 'show')->name('showSujet')->middleware(EnsureUserIsLoggedIn::class);
    Route::get('/modifier/sujet/{id}', 'create')->name('createSujet')->middleware(EnsureUserIsLoggedIn::class);
    Route::put('/updateSujet/{id}', 'update')->name('updateSujet')->middleware(EnsureUserIsLoggedIn::class);
    Route::delete('/delete/sujet/{id}', 'destroy')->name('deleteSujet')->middleware(EnsureUserIsLoggedIn::class);
});

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
}); */

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
