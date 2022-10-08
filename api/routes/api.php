<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\LiveDetailController;
use App\Http\Controllers\LiveHallController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/artist', ArtistController::class);
Route::apiResource('/live-detail', LiveDetailController::class);
Route::apiResource('/live-hall', LiveHallController::class);