<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cours extends Model
{
    protected $table = 'cours';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'title',
        'ordre',
        'couleur',
        'id_matiere',
        'id_users',
        'id_icon',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users');
    }

    public function matiere(): BelongsTo
    {
        return $this->belongsTo(Matiere::class, 'id_matiere');
    }

    public function icon(): BelongsTo
    {
        return $this->belongsTo(Icon::class, 'id_icon');
    }

    public function chapitres(): HasMany
    {
        return $this->hasMany(Chapitre::class, 'id_cours');
    }
}
