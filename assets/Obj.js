import { JsonObject, JsonProperty, Any } from 'json2typescript';
import Item from './Item';

@JsonObject('Obj')
export default class Obj {
  @JsonProperty('items', [Item], true)
  items = undefined;
}



