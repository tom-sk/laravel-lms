<?php

namespace App\Models;

use DoubleThreeDigital\Runway\Traits\HasRunwayResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Slide extends Model
{
    use HasFactory;
    use HasRunwayResource;

    protected $fillable = ['topic_id', 'name', 'sort_order'];

//    public function topics(): BelongsTo
//    {
//        return $this->belongsTo(Topic::class);
//    }
}
