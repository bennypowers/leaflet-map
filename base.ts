import type { PropertyValues } from 'lit-element';
import { FireMixin } from '@pwrs/mixins/fire';
import { LitElement, property } from 'lit-element';
import { bound } from './bound-decorator';

type LeafletFeature =
  | null
  | L.Circle
  | L.GeoJSON
  | L.Marker
  | L.LayerGroup
  | L.Polyline
  | L.Polygon
  | L.Popup
  | L.Point;

export class LeafletBase extends FireMixin(LitElement) {
  _mutationObserver?: MutationObserver;

  feature: LeafletFeature;

  _container: L.Map | L.LayerGroup;

  get container() {
    return this._container;
  }

  set container(v) {
    this._container = v;
  }

  @bound onLeafletEvent(e: L.LeafletEvent) {
    this.fire(e.type, e);
  }
}