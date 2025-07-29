<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Icon extends Model
{
    protected $table = 'icon';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'filename',
        'boutique',
    ];
}
