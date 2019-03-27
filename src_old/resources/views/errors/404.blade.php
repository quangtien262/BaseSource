@extends('layouts.backend')

@section('script')
    <script src="/vendor/laravel-filemanager/js/stand-alone-button.js"></script>     
    <script>
        $('#lfm').filemanager('image'); //file
    </script>
@endsection

@section('content')
<section>
    <div class='col-lg-4 col-lg-offset-4'>
        <h1><center>401<br>
        ACCESS DENIED</center></h1>
    </div>
</section>
@endsection
