<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\SujetsResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function toggleLightMode()
    {
        $user = Auth::user();

        $user->light_mode = !$user->light_mode;
        $user->save();

        return redirect()->back();
    }

    public function signet()
    {
        return Inertia::render('Profile/Signet', [
            'signets' => Auth::user()->signets,
        ]);
    }

    public function sujets()
    {
        return Inertia::render('Profile/Sujets', [
            'sujets' => SujetsResource::collection(Auth::user()->sujets()->paginate(12)),
        ]);
    }
}
