@extends('layouts.backend')

@section('content')

<div class="row">
    <div class="col-md-6">
        <div class="dd" id="nestable">
            <ol class="dd-list">
                <li class="dd-item" data-id="2">
                    <div class="card b0 dd-handle">
                        <div class="mda-list">
                            <div class="mda-list-item">
                                <div class="mda-list-item-icon item-grab"><em class="ion-drag icon-lg"></em></div>
                                <div class="mda-list-item-icon bg-info"><em class="ion-coffee icon-lg"></em></div>
                                <div class="mda-list-item-text mda-2-line">
                                    <h3>Vincent Morgan</h3>
                                    <h4>Brunch this weekend?</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol class="dd-list">
                        <li class="dd-item" data-id="5">
                            <div class="card b0 dd-handle">
                                <div class="mda-list">
                                    <div class="mda-list-item">
                                        <div class="mda-list-item-icon item-grab"><em class="ion-drag icon-lg"></em></div>
                                        <div class="mda-list-item-icon bg-info"><em class="ion-coffee icon-lg"></em></div>
                                        <div class="mda-list-item-text mda-2-line">
                                            <h3>Taylor Grant</h3>
                                            <h4>Brunch this weekend?</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ol class="dd-list">
                                <li class="dd-item" data-id="6">
                                    <div class="card b0 dd-handle">
                                        <div class="mda-list">
                                            <div class="mda-list-item">
                                                <div class="mda-list-item-icon item-grab"><em class="ion-drag icon-lg"></em></div>
                                                <div class="mda-list-item-icon bg-info"><em class="ion-coffee icon-lg"></em></div>
                                                <div class="mda-list-item-text mda-2-line">
                                                    <h3>Lorraine Cooper</h3>
                                                    <h4>Brunch this weekend?</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
        <p>Output</p>
        <div class="well" id="nestable-output"></div>
    </div>
</div>

@endsection