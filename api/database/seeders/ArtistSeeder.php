<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist;

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Artist::create([
            'name' => 'maneskin',
            'profile' => 'イタリアのバンド',
            'nationality' => 'イタリア',
            'image' => 'test',
        ]);

        Artist::create([
            'name' => 'the 1975',
            'profile' => 'イギリスのバンド',
            'nationality' => 'イギリス',
            'image' => 'test',
        ]);

        Artist::create([
            'name' => '吉幾三',
            'profile' => '日本のおじさん',
            'nationality' => '日本',
            'image' => 'test',
        ]);
    }
}
