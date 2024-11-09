<?php

use App\Http\Controllers\PollController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('v1/polls', [PollController::class, 'getAll']);
