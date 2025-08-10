<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sujet extends Model
{
    protected $table = 'sujet';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'title',
        'meta',
        'id_etat',
        'id_users',
        'id_chapitre',
        'couleur',
        'ordre',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users');
    }

    public function etat(): BelongsTo
    {
        return $this->belongsTo(Etat::class, 'id_etat');
    }

    public function chapitre(): BelongsTo
    {
        return $this->belongsTo(Chapitre::class, 'id_chapitre');
    }
}
