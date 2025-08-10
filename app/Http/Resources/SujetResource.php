<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SujetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "meta" => json_decode($this->meta),
            "etat" => $this->etat->nom,
            "author" => $this->author->name,
            "chapitre" => $this->chapitre ?? null,
            "couleur" => $this->couleur,
        ];
    }
}
