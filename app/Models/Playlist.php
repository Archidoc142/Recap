<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Playlist extends Pivot
{
    protected $table = 'playlist';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable= [
        'id_users',
        'id_sujet',
        'signet',
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'id_users');
    }

    public function sujet(): BelongsTo
    {
        return $this->belongsTo(Sujet::class, 'id_sujet');
    }
}
