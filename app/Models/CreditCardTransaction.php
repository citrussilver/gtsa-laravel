<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreditCardTransaction extends Model
{
    use HasFactory;

    protected $table = 'credit_card_transactions';

    protected $primaryKey = 'cc_transact_id';

    protected $guarded = [];
}
