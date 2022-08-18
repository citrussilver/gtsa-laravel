<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavingsAcctTransaction extends Model
{
    use HasFactory;

    protected $table = 'savings_acct_transactions';

    protected $primaryKey = 'sa_transact_id';

    
}
