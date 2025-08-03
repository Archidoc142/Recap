<?php

namespace App\Http\Controllers;

use App\Models\sujet;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SujetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:50',
        ]);

        // Create a new sujet instance
        $sujet = new sujet();
        $sujet->title = $request->input('title');
        $sujet->meta = json_encode(["type" => $request->input('type')]);
        $sujet->id_users = Auth::id(); // Assuming the user is authenticated

        $etat = $request->input('id_etat');
        $role = Auth::user()->role;

        if ($etat === 1) {
            $sujet->id_etat = ($role === 'Administrateur') ? 1 : 3;
        } else {
            $sujet->id_etat = 2;
        }

        $sujet->id_etat = $request->input('id_etat', 2);
        $sujet->couleur = $request->input('couleur');
        $sujet->created_at = now();
        $sujet->save();

        return redirect()->route('sujets')->with('success', 'Sujet créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(sujet $sujet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(sujet $sujet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, sujet $sujet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(sujet $sujet)
    {
        //
    }
}
