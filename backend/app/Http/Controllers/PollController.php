<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PollController extends Controller
{
    public function getAll()
    {
        $polls = Poll::get();

        return response()->json($polls, 200);
    }

    public function createPoll(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:10',
            'options' => 'required|min:10'
        ]);

        if ($validator->fails()) {
            $data = [
                'error' => $validator->errors()
            ];

            return response()->json($data, 400);
        }

        $poll = Poll::create(
            [
                'name' => $request->name,
                'options' => $request->options
            ]
            );

        if (!$poll) {
            $data = [
                'error' => 'Is not posible create this poll'
            ];

            return response()->json($data, 400);
        }

        $poll->save();

        $data = [
            'poll' => $poll
        ];

        return response()->json($data, 200);
    }
}
