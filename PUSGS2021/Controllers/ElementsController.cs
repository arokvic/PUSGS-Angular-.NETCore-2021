using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PUSGS2021.Data;
using PUSGS2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PUSGS2021.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ElementsController : ControllerBase
  {
    private readonly DefaultConnection _context;
    public ElementsController(DefaultConnection context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ElementModel>>> GetElements()
    {
      return await _context.Elements.ToListAsync();
    }

    /*[HttpGet]
    [Route("GetUsedElements")]
    public List<ElementModel> GetUsedElements()
    {
        List<List<ElementModel>> elementsLists = new List<List<ElementModel>>();
        List<ElementModel> allElements = _context.Elements.ToList();
        List<ElementModel> usedElements = new List<ElementModel>();

        foreach(ElementModel element in allElements)
        {
            if(element.InSafetyDocument)
            {
                usedElements.Add(element);
                allElements.Remove(element);
            }
        }

        elementsLists.Add(usedElements);
        elementsLists.Add(allElements);



        return allElements;
    }*/
    [HttpPut]
    [Route("ChangeElement")]
    public async Task<ActionResult<ElementModel>> ChangeElement(long id)
    {


      var element1 = _context.Elements.FirstOrDefault(n => n.Id == id);

      element1.InSafetyDocument = true;

      await _context.SaveChangesAsync();

      return CreatedAtAction("GetElements", element1);

    }
    [HttpPut]
    [Route("RemoveElement")]
    public async Task<ActionResult<ElementModel>> RemoveElement(long id)
    {


      var element1 = _context.Elements.FirstOrDefault(n => n.Id == id);

      element1.InSafetyDocument = false;



      await _context.SaveChangesAsync();

      return CreatedAtAction("GetElements", element1);

    }



    [HttpPost]
    [Route("AddElement")]
    public async Task<ActionResult<ElementModel>> AddElement()
    {

      ElementModel element1 = new ElementModel()
      {
        Address = "Vojvodjanska 65",
        Coordinates = "39193",
        Type = "prekidac",
        Name = "PRE1"

      };

      _context.Elements.Add(element1);

      await _context.SaveChangesAsync();

      //SaveStreet("sdfsdf");

      return CreatedAtAction("GetElements", element1);

    }

    [HttpPost]
    [Route("SaveElement")]
    public async Task<ActionResult<ElementModel>> SaveElement(ElementModel element)
    {
      ElementModel element1 = new ElementModel()
      {
        Address = element.Address,
        Coordinates = element.Coordinates,
        Type = element.Type,
        Name = element.Name  //name podesiti da racuna koji je po redu ELEMENT i prva tri slova tog el na osnovu tipa

      };

      _context.Elements.Add(element1);

      char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

      string newStreet = element.Address.Split(separators, 2)[0].Trim();
      bool contain = false;
      foreach (StreetModel street in _context.Streets)
      {
        if (street.Name == newStreet)
        {
          contain = true;
        }
      }

      if (!contain)
      {
        Random rand = new Random();
        StreetModel street = new StreetModel
        {
          Name = newStreet,
          dPriority = rand.Next(1, 6),
          cPriority = rand.Next(1, 6)
        };
        _context.Streets.Add(street);
      }

      await _context.SaveChangesAsync();

      return CreatedAtAction("GetElements", element1);

    }

    public async Task<ActionResult<string>> SaveStreet(string address)
    {
      char[] separators = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

      string streetName = address.Split(separators, 2)[0].Trim();

      List<ElementModel> lista = _context.Elements.ToList();


      /*List<string> streets = new List<string>();

      foreach (ElementModel element in lista)
      {
          string streetName = element.Address.Split(separators, 2)[0].Trim();
          Random rand = new Random();

          StreetModel street = new StreetModel
          {
              Name = streetName,
              dPriority = rand.Next(1, 6),
              cPriority = rand.Next(1, 6)
          };



          if (!streets.Contains(streetName))
          {
              _context.Streets.Add(street);
          }
          streets.Add(streetName);

      }

      await _context.SaveChangesAsync();*/

      return "ok";
    }



  }
}
