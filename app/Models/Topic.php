<?php

namespace App\Models;

use DoubleThreeDigital\Runway\Traits\HasRunwayResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Topic extends Model
{
    use HasFactory;
    use HasRunwayResource;

    protected $fillable = ['module_id', 'name'];

    public function modules(): BelongsToMany
    {
        return $this->belongsToMany(Module::class);
    }

//
    public function slides(): HasMany
    {
        return $this->hasMany(Slide::class);
    }
}
