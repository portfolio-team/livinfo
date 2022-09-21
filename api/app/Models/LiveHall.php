<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LiveHall extends Model
{
    use HasFactory;

    public function liveDetails(){
        return $this->hasMany(LiveDetail::class);
    }
}
