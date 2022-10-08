<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LiveDetail extends Model
{
    use HasFactory;

    public function artists(){
        return $this->morphToMany(Artist::class, 'playable');
    }

    public function liveHall(){
        return $this->belongsTo(LiveHall::class);
    }
}
