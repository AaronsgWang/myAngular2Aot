import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { HeroRecord } from '../model/Hero';

@Component({
    selector: 'my-hero-detail-content',
    template: `<template [ngIf]="hero">
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
	    <label>name: </label>
	    <input [ngModel]="hero.name" (ngModelChange)="hero = hero.set('name', $event)" placeholder="name"/>
	</div>
	<button (click)="save()">Save</button>
</template>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailContentComponent {
    @Input()
    hero: HeroRecord;

    @Output()
    onSave: EventEmitter<HeroRecord> = new EventEmitter<HeroRecord>();

    constructor(
    ) { }

    save() {
        this.onSave.next(this.hero);
    }
}