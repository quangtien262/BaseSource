@php
    $tbl = app('ClassTables')->getTable($table->table_tab);
    $tabs = app('EntityCommon')->getRowsByConditions($tbl->name);
@endphp
<ul id="myTabs" role="tablist" class="nav nav-tabs nav-justified">
    @foreach($tabs as $idx => $tab) 
        <li class="item-tab-name {{ $tabId == $tab->id ? 'active':'' }}">
            <a href="?tab={{ $tab->id }}">{{ $tab->name }}</a>
        </li>
    @endforeach
</ul>