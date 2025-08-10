<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chapitre extends Model
{
    protected $table = 'chapitre';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'title',
        'ordre',
        'couleur',
        'id_users',
        'id_cours',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users');
    }

    public function cours(): BelongsTo
    {
        return $this->belongsTo(Cours::class, 'id_cours');
    }

    public function sujets(): HasMany
    {
        return $this->hasMany(Sujet::class, 'id_chapitre');
    }

    public function getNbCours() : int
    {
        return $this->sujets()->count();
    }
}
