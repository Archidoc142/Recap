<?php

namespace App\Http\Controllers;

use App\Models\chapitre;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\ChapitreResource;
use App\Http\Resources\SujetsResource;
use App\Models\Sujet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChapitreController extends Controller
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
    public function create(int $id)
    {
        return Inertia::render('Chapitre/ModifierChapitre', [
            'chapitre' => new ChapitreResource(chapitre::find($id)),
            'sujets' => SujetsResource::collection(Sujet::where('id_users', Auth::id())->get()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate(['title' => 'required|string|max:255']);

        // Create a new chapitre instance
        $chapitre = new chapitre();
        $chapitre->title = $request->input('title');
        $chapitre->id_users = Auth::id(); // Assuming the user is authenticated
        $chapitre->couleur = $request->input('couleur');
        $chapitre->created_at = now();
        $chapitre->save();

        return redirect()->route('chapitres')->with('success', 'Chapitre créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(chapitre $chapitre)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(chapitre $chapitre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(int $id, Request $request)
    {
        if ($request->has('originalContent') && is_array($request->input('originalContent'))) {
            Sujet::whereIn('id', $request->input('originalContent'))
                  ->update(['id_chapitre' => null, 'ordre' => 0]);
        }

        if ($request->has('data') && is_array($request->input('data'))) {
            $data = $request->input('data');
            foreach ($data as $index => $sujetId) {
                Sujet::where('id', $sujetId)
                      ->update([
                          'ordre' => $index + 1,
                          'id_chapitre' => $id
                      ]);
            }
        }

        return redirect()->route('chapitres')->with('success', 'Chapitre mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $chapitre = chapitre::findOrFail($id);
        $chapitre->delete();

        return redirect()->route('chapitres')->with('success', 'Chapitre supprimé avec succès.');
    }
}
