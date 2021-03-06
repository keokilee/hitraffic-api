-[![Join the chat at https://gitter.im/hitraffic/api-server](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/hitraffic/api-server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

API Endpoint for Traffic Data
# api-server

* API Endpoint for Traffic Data

Hosting is at http://api.hitraffic.org/v1

## GET /incidents

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>The default route.</dd>

<dt><strong>SPECS:</strong></dt>
>  URL may contain one or more of the following query parameters:
</d1>

<ul>
<li>from: Fetch incidents beginning from this date.  Should be in a unix timestamp format.</li>
<li>to: Fetch incidents up to this date.  Should be in a unix timestamp format.</li>
<li>area: Area as defined by GET /areas</li>
<li>type: Incident type as defined by GET /types</li>
</ul>

<d1>
<dt><strong>EXAMPLES:</strong></dt>
</d1>

```bash
GET /incidents?from=2014-10-31T23:59:59Z
- Fetch all incidents that happened since 10/31/2014 11:59:59PM.
GET /incidents?from=2014-10-31T23:59:59Z&to=2015-01-01T00:00:00Z
- Fetch all incidents that happened between 10/31/2014 11:59:59PM and 1/1/2015 12:00:00AM.
```
__________________________________________________________________________
## GET /incidents/

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Retrieves all motor vehicle incidents in past 2 years.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>Returns all motor vehicle incidents in 2 years.</dd>

<dt><strong>ROUTES:</strong></dt>
<dd>[incidents](http://api.hitraffic.org/v1/incidents/)</dd>
</d1>
__________________________________________________________________________
## GET /areas

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Fetches all areas in the database.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>This should just return an array, i.e. [‘HONOLULU’, ‘KANEOHE’, ‘PEARL CITY’].</dd>
<dd>The array should contain unique values, i.e., don’t list ‘Honolulu’ twice.</dd>

__________________________________________________________________________
## GET /types

<d1>
<dt><strong>DESCRIPTION:</strong></dt>
<dd>Fetches all incident types.</dd>

<dt><strong>SPECS:</strong></dt>
<dd>This should just return an array, i.e. [‘MOTOR VEHICLE COLLISION’, ‘HAZARDOUS DRIVER’, ‘STALLED/HAZARDOUS VEHICLE’, ‘TRAFFIC INCIDENT - NO COLLISION’, ‘TRAFFIC NUISANCE OR PARKING VIOLATION’].</dd>
<dd>The array should contain unique values.</dd>
</d1>
__________________________________________________________________________

# Development

* Clone/fork this project
* `npm install`
* Create a `.env` file that contains your configuration. An example is provided in `.env.example`.
* Run `npm start`.
