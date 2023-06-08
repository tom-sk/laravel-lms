<?php

namespace App\Models;

use DoubleThreeDigital\Runway\Traits\HasRunwayResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Module extends Model
{
    use HasFactory;
    use HasRunwayResource;
    protected $fillable = ['topic_id', 'name'];

    public function topics(): BelongsToMany
    {
        return $this->belongsToMany(Topic::class);
    }

//    public function topics(): HasMany
//    {
//        return $this->hasMany(Topic::class);
//    }
}
