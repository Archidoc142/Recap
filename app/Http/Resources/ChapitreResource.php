<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChapitreResource extends JsonResource
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
            "author" => $this->author->name,
            "cours" => $this->cours->title ?? null,
            "couleur" => $this->couleur,
            "ordre" => $this->ordre,
            "nb_sujets" => $this->getNbCours(),
        ];
    }
}
