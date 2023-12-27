import FormInput from "../../../../components/forms/FormInput";

export default function PriceFields({
  prices,
  handlePriceOrDateChangeInstance,
  removePriceField,
  addPriceField,
}) {
  console.log(prices);
  return prices.map((price, index) => (
    <fieldset key={index} className="border-4 border-solid black">
      <div className="px-2">
        <FormInput
          label={
            price?.is_pricematch ? `Prismatch pris: ` : `Pris: ${index + 1}`
          }
          type="number"
          placeholder="Skriv pris på varen her"
          name="price"
          value={price.price}
          onChange={value =>
            handlePriceOrDateChangeInstance("price", index)(value)
          }
        />

        <div>
          <p>Kampagne</p>
          <input
            type="checkbox"
            name="is_campaign"
            checked={price.is_campaign}
            onChange={event =>
              handlePriceOrDateChangeInstance(
                "is_campaign",
                index
              )(event.target.checked)
            }
          />
        </div>
        <FormInput
          label="Start dato"
          type="date"
          name="starting_at"
          value={
            price.starting_at
              ? new Date(price.starting_at).toISOString().split("T")[0]
              : ""
          }
          onChange={value =>
            handlePriceOrDateChangeInstance("starting_at", index)(value)
          }
        />
        <FormInput
          label="Slut dato"
          type="date"
          name="ending_at"
          value={
            price.ending_at
              ? new Date(price.ending_at).toISOString().split("T")[0]
              : ""
          }
          onChange={value =>
            handlePriceOrDateChangeInstance("ending_at", index)(value)
          }
        />
        <div className="flex flex-row justify-between font-bold">
          <button
            type="button"
            onClick={() => removePriceField(index)}
            disabled={prices.length <= 1}
          >
            Remove Price
          </button>
          <button type="button" onClick={addPriceField}>
            Add Price
          </button>
        </div>
      </div>
    </fieldset>
  ));
}
