<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $fillable = [
        'name',
        'slug',
        'profile',
        'nationality',
        'image',
    ];

    public function liveDetails(){
        return $this->morphToMany(LiveDetail::class, 'playable');
    }
}
