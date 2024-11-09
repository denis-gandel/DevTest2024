<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use Illuminate\Http\Request;

class PollController extends Controller
{
    public function getAll(){
        $polls = Poll::get();

        return response()->json($polls, 200);
    }
}
