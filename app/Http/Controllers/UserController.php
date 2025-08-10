<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ChapitreResource;
use App\Http\Resources\CoursResource;
use App\Http\Resources\SujetsResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function toggleLightMode(Request $request)
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

    public function chapitres()
    {
        return Inertia::render('Profile/Chapitres', [
            'chapitres' => ChapitreResource::collection(Auth::user()->chapitres()->paginate(12)),
        ]);
    }

    public function cours()
    {
        return Inertia::render('Profile/Cours', [
            'cours' => CoursResource::collection(Auth::user()->cours()->paginate(12)),
        ]);
    }
}
