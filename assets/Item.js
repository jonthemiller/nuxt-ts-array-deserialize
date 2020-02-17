import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Item')
export default class Item {
  @JsonProperty('bar')
  bar = '';

  getBar () {
    return 'foo ' + this.bar;
  }
}
